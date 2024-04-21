import Footer from './components/Footer'
import Header from './components/Header'
import MyCard from './components/MyCard'

const App = () => {
  return (
    <>
      <div className='container pt-5 mt-5'>
        <Header title='Adopta un perrito' />
        <div className='text-center d-flex'>
          <MyCard
            image='src/assets/img/imagen1.jpg'
            title='Bartolo'
            text='Lleno de energia y listo para jugar. ¡Dale a Bartolo el hogar amoroso que se merece!'
            bg='success'
            buttonText='Husky'
          />
          <MyCard
            image='src/assets/img/imagen2.jpg'
            title='Messi'
            text='Es Juguetón, amigable y se lleva bien con niños y otros animales. ¡Haz de Messi parte de tu familia hoy mismo!'
            bg='primary'
            buttonText='Cocker spaniel'
          />
          <MyCard
            image='src/assets/img/imagen3.jpg'
            title='Gohan'
            text='Un perro de tamaño mediano con un corazón gigante. ¡Hazte amigo de Gohan y experimenta un amor incondicional!'
            bg='danger'
            buttonText='Labradoodle'
          />
          <MyCard
            image='src/assets/img/imagen4.jpg'
            title='Princesa'
            text='Es una compañera leal y cariñosa que adora los mimos y los abarzos. ¡Ayuda a Princesa a encontrar su final feliz!'
            bg='warning'
            buttonText='Beagle'
          />
        </div>
        <Footer />
      </div>
    </>
  )
}

export default App
