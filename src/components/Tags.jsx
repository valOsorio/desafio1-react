import Badge from 'react-bootstrap/Badge'

const Tags = (props) => {
  return (
    <>
      <div>
        <Badge className='btn badge rounded-pill fs-5 mb-4 p-3' style={{ width: '80%' }} bg={props.bg}>{props.buttonText}</Badge>
      </div>
    </>
  )
}

export default Tags
