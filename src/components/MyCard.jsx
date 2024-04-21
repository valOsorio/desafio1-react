import Card from 'react-bootstrap/Card'
import Tags from './Tags'

const MyCard = (props) => {
  return (
    <Card style={{ width: '20rem' }} className='m-2'>
      <Card.Img className='p-3' src={props.image} />
      <Card.Body>
        <Card.Title className='fs-3'>{props.title}  </Card.Title>
        <Card.Text className='fs-5'>{props.text}</Card.Text>
      </Card.Body>
      <Tags bg={props.bg} buttonText={props.buttonText} />
    </Card>
  )
}

export default MyCard
