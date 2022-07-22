import { defineStore } from 'pinia'
type Transaction = {
    id: number,
    type: 'charge' | 'fund' | 'payment',
    amount: number,
    status: 'pending' | 'processed'
}
type BankDetails = {
    balance: number,
    transactions: Transaction[]
}
export const useBankAccountStore = defineStore({
    id: 'counter',
    state: () => {
        return {
            balance: 0,
            transactions: []
        } as BankDetails
    },
    getters: {
        processedTransactions: (state) =>
            state.transactions.filter((t) => t.status === 'processed'),
        pendingTransactions: (state) =>
            state.transactions.filter((t) => t.status === 'pending'),
        runningBalance(state): number {
            return (
                this.balance + this.processedTransactions.map((t) => t.amount).reduce((acc, curr) => acc + curr + 0)
            )
        },
        pendingBalance(state): number {
            return (
                this.balance + this.pendingTransactions.map((t) => t.amount).reduce((acc, curr) => acc + curr + 0)
            )
        }
    },
    actions: {
        charge(amount: number) {
            const id = Date.now()
            this.transactions.push({
                id: id,
                type: 'charge',
                amount: amount,
                status: 'pending'
            })
            return id
        }
    }
})
