// Node.js で GraphQL サーバーを実装するためのライブラリ
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

// 型(Schema)定義
const typeDefs = gql`
	type Comedian {
		combinationName: String
		tsukkomi: String
		boke: String
	}

	# 型を元にお問い合わせ
	type Query {
		test: [Comedian]
	}
`;

// 実際にお問い合わせが来た時にどのデータを返すかを定義
const resolvers = {
	Query: {
		test: () => comedian,
	},
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
	console.log(`Server ready at ${url}`);
});
