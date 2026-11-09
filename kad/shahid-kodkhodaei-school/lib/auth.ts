import { cookies } from 'next/headers'; import { SignJWT, jwtVerify } from 'jose'; import { db } from './db';
export type Role='STUDENT'|'TEACHER'|'TEACHER_ASSISTANT'|'DEPUTY'|'PRINCIPAL';
const secret=new TextEncoder().encode(process.env.AUTH_SECRET||'dev-only-change-me');
export async function createSession(userId:string){const token=await new SignJWT({userId}).setProtectedHeader({alg:'HS256'}).setExpirationTime('7d').sign(secret);(await cookies()).set('school_session',token,{httpOnly:true,secure:process.env.NODE_ENV==='production',sameSite:'lax',path:'/',maxAge:60*60*24*7});}
export async function currentUser(){try{const token=(await cookies()).get('school_session')?.value;if(!token)return null;const {payload}=await jwtVerify(token,secret);const userId=String(payload.userId);return db.user.findUnique({where:{id:userId},include:{student:{include:{classroom:true}},teacher:true,assistantClass:true}})}catch{return null}}
export async function requireRole(roles:Role[]){const u=await currentUser();if(!u||!u.active||!roles.includes(u.role as Role))throw new Error('UNAUTHORIZED');return u;}
export async function logout(){(await cookies()).delete('school_session');}
