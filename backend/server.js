const { ApolloServer, gql } = require("apollo-server");

const comedian = [
	{
		combinationName: "オードリー",
		tsukkomi: "若林正恭",
		boke: "春日俊彰",
	},
	{
		combinationName: " ニューヨーク",
		tsukkomi: "屋敷裕政",
		boke: "嶋佐和也",
	},
];

const typeDefs = gql`
	type Comedian {
		combinationName: String
		tsukkomi: String
		boke: String
	}

	type Query {
		comedian: [Comedian]
	}
`;

const resolvers = {
	Query: {
		test: () => comedian,
	},
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
	console.log(`Server ready at ${url}`);
});
