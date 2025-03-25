export const resolvers = {
    Query: {
        budgets: async () => {
            return [
                { id: "1", name: "Groceries", amount: 300.0, user: { id: "1", email: "user@example.com" } },
                { id: "2", name: "Rent", amount: 1200.0, user: { id: "1", email: "user@example.com" } },
            ];
        },
        users: async () => {
            return [{ id: "1", email: "user@example.com", budgets: [] }];
        },
    },
    Mutation: {
        createBudget: async (_, { name, amount }) => {
            return { id: "3", name, amount, user: { id: "1", email: "user@example.com" } };
        },
    },
};
