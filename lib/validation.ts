import { z } from 'zod';
export const loginSchema=z.object({username:z.string().min(1).max(50),password:z.string().min(1).max(100),role:z.enum(['STUDENT','TEACHER','TEACHER_ASSISTANT','DEPUTY','PRINCIPAL'])});
export const newsSchema=z.object({title:z.string().min(3).max(160),content:z.string().min(3),imageUrl:z.string().url().optional().or(z.literal(''))});
export const assignmentSchema=z.object({title:z.string().min(2),description:z.string().min(2),subjectId:z.string().min(1),dueDate:z.string().optional()});
