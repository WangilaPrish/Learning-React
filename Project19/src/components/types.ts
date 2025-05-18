export type Info = {
    id: string | number;
    name: string;
    email: string;
}
export type AdminInfoList = Info & {
    role: string;
    permissions: string[];
};
