export const ROLES = {
    ADMIN: 'admin',
    STUDENT: 'student',
    // Add more roles as needed
  } as const
  
  export type Role = typeof ROLES[keyof typeof ROLES]
  