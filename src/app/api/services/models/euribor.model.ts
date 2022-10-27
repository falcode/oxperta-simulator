export interface AllEuribors {
    central_bank_rates: Euribor[];
    non_central_bank_rates: Euribor[];
}

export interface Euribor {
    last_updated: Date;
    name: string;
    rate_pct: number;
}

