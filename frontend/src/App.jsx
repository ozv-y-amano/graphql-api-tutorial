import { gql, useQuery } from '@apollo/client'
import './App.css'

const COMEDIAN = gql`
  query {
    test {
      combinationName
      tsukkomi
      boke
    }
  }
`

const Books = () => {
  const {loading, error, data} = useQuery(COMEDIAN);

  if ( loading ) return <p>ロード中・・・</p>;
  if ( error ) return <p>エラー</p>;

  return data.test.map(({combinationName, tsukkomi, boke}) => (
      <div key={combinationName}>
        <h3>コンビ名：{combinationName}</h3>
        <p>
          ツッコミ : {tsukkomi}
        </p>
        <p>
          ボケ：{boke}
        </p>
      </div>
    ))
}

function App() {
  return (
    <div className='App'>
      <h2>GraphQL Client</h2>
      <Books />
    </div>
  )
}

export default App
