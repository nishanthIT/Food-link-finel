import { useNavigate, useRouteError } from 'react-router-dom';
import LinkButton from './LinkButtton';

function NotFound() {
 
  const error = useRouteError();

  return (
    <div className='text-m p-5 space-y-4'>
      <h1>Something went wrong 😢</h1>
      <p className=''>{error.data || error.message}</p>
      <LinkButton to="-1">&larr; Go back</LinkButton>
   
    </div>
  );
}

export default NotFound;
