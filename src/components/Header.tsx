import {NavLink, useLocation} from "react-router-dom";
import {type FormEvent, useEffect, useMemo, useState} from "react";
import {useAppStore} from "../stores/useAppStore.ts";

const Header = () => {

  const [searchFilters, setSearchFilters] = useState({
    ingredient: '',
    category: '',
  });

  const {pathname} = useLocation()

  const isHome = useMemo(() => pathname === '/', [pathname])

  const fetchCategories = useAppStore(state => state.fetchCategories)
  const categories = useAppStore(state => state.categories)
  const searchRecipes = useAppStore(state => state.searchRecipes)

  useEffect(() => {
    fetchCategories()
  }, [])


  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    // TODO: Validar y agregar notificación
    if (Object.values(searchFilters).some(value => value === '')) {
      console.log('Faltan campos por completar')
      return
    }

    // Consultar recetas
    await searchRecipes(searchFilters)
  }

  return (
    <>
      <header className={isHome ? 'bg-header bg-center bg-cover' : 'bg-slate-800'}>
        <div className={'mx-auto container px-5 py-16'}>
          <div className={'flex justify-between items-center'}>
            <div>
              <img className={'w-32'} src={'/logo.svg'} alt={'logo'}/>
            </div>
            <nav className={'flex gap-4'}>
              <NavLink to={'/'}
                       className={({isActive}) =>
                         isActive ? 'uppercase font-bold text-orange-500' : 'uppercase font-bold text-white'
                       }
              >Inicio</NavLink>
              <NavLink to={'/favoritos'}
                       className={({isActive}) =>
                         isActive ? 'uppercase font-bold text-orange-500' : 'uppercase font-bold text-white'
                       }
              >Favoritos</NavLink>
            </nav>
          </div>
          {isHome && (
            <form onSubmit={handleSubmit}
              className={'md:w-1/2 2xl:w-1/3 bg-orange-400 rounded-lg p-10 my-32 shadow space-y-6'}>
              <div className={'space-y-4'}>
                <label htmlFor={'ingredient'}
                       className={'block text-white uppercase font-extrabold text-lg'}>Nombre o ingrediente</label>
                <input type="text"
                       id={'ingredient'}
                       name={'ingredient'}
                       className={'block w-full bg-white border border-gray-300 rounded-md py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-orange-500'}
                       onChange={e => setSearchFilters({...searchFilters, ingredient: e.target.value})}
                       value={searchFilters.ingredient}
                       placeholder={'Nombre o ingrediente. Ej: Vodka, Tequila, etc.'}/>
              </div>
              <div className={'space-y-4'}>
                <label htmlFor={'category'}
                       className={'block text-white uppercase font-extrabold text-lg'}>Categoría</label>
                <select
                  id={'category'}
                  name={'category'}
                  onChange={e => setSearchFilters({...searchFilters, category: e.target.value})}
                  value={searchFilters.category}
                  className={'block w-full bg-white border border-gray-300 rounded-md py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-orange-500'}>
                  <option value={''}>--Seleccione--</option>
                  {categories.drinks.map(category => (
                    <option key={category.strCategory} value={category.strCategory}>{category.strCategory}</option>
                  ))}
                </select>
              </div>
              <input type="submit"
                     className={'block w-full bg-orange-800 text-white uppercase font-extrabold text-lg rounded-md py-3 px-4 cursor-pointer hover:bg-orange-900 transition-all duration-300 ease-in-out transform hover:scale-102'}
                     value={'Buscar Recetas'}/>
            </form>
          )}
        </div>
      </header>
    </>
  )
}
export default Header
