export type Role = {
    id: string;
    role: string;
    startDate: string;
    endDate: string;
    company: string;
    duties: Duty[];
}

export type Duty = {
    id: string;
    duty: string;
}