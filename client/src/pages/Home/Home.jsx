// Components
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

import { getTodoProxy } from '../../util/proxy';
import useFetch from '../../hooks/useFetch';

export default function Home() {
  const response = useFetch(getTodoProxy());
  console.log(response);

  return (
    <>
      <Header />

      <main className='home'>
        <h1>Home</h1>
      </main>

      <Footer />
    </>
  );
}