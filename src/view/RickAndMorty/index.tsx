import React, { useState, useEffect } from 'react';
import api from '../../service/api';

interface IResults {
  id: number;
  image: string;
  name: string;
  url: string;
}

interface ICount{
  count: number;
  pages: number;
}

interface IResponseData{
  info: ICount;
  results: IResults[];
}

const RickAndMorty: React.FC = () => {
  const [ data, setData ] = useState<IResults[]>([]);
  const [ page, setPages ] = useState<number>(1);
  const [ info, setInfo ] = useState<ICount>({} as ICount)
  const [ isLoad, setIsLoad ] = useState(false);

  const valorQualquer = localStorage.getItem('@name')

  const handleClearStorage = () => {
    localStorage.removeItem('@name');
  }

  useEffect(() => {
    setIsLoad(true)
    api.get<IResponseData>(`?page=${page}`).then(
      response => {
        console.log(response.data)
        setInfo(response.data.info)
        setData(response.data.results)
        console.log('Retorna', response.data.results)
      }
    )
    .catch( e => console.log(e))
    .finally( () => {
      setIsLoad(false)
     } );
  }, [page]);

  if(isLoad){
    return (
      <div>
        <p>Carregando</p>
      </div>
    )
  }

  return(
    <div>
      {valorQualquer}
      <button onClick={handleClearStorage}>
        Limpar localStorage
      </button>
      <h1>RickAndMorty</h1>
      { data.map( item => (
        <div key={item.id}>
          <img src={item.image} alt={item.name} />
          <p>{item.name}</p>
          <a href={item.url}>Clique aqui para ver mais</a>
        </div>
      ))}
      <div>
        <button
          onClick={ () => setPages(page - 1)}
          disabled={ page <= 1 }
        >
          Anterior
        </button>
        <button
          onClick={ () => setPages(page + 1)}
          disabled={ page >= info.pages }
        >Proximo</button>
      </div>
    </div>
  )
}

export default RickAndMorty;