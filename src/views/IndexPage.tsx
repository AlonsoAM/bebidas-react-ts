import {useAppStore} from "../stores/useAppStore.ts";

const IndexPage = () => {

  const categories = useAppStore(state => state.categories)

  console.log(categories)


  return (
    <>
      <h1>Inicio</h1>
    </>
  )
}
export default IndexPage
