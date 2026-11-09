import type { Role } from './auth';
export const managementRoles:Role[]=['PRINCIPAL','DEPUTY'];
export const roleLabel:Record<Role,string>={STUDENT:'دانش‌آموز',TEACHER:'معلم',TEACHER_ASSISTANT:'همیار آموزشی',DEPUTY:'معاون',PRINCIPAL:'مدیر'};
