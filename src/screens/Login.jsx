
import Button from '../components/Button'
import Input from '../components/Input'
import { TextField } from '@mui/material'
import { alpha, styled } from '@mui/material/styles';
function Login() {

  const CssTextField = styled(TextField)({
    '& label.Mui-focused': {
      color: '#A0AAB4',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: '#B2BAC2',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: '#B2BAC2',
      },
      '&:hover fieldset': {
        borderColor: '#6F7E8C' ,
      },
      '&.Mui-focused fieldset': {
        borderColor: '#A0AAB4',
      },
    },
  });


  return (
    <div className='items-center w-full h-screen flex p-4 justify-center bg-slate-950'>
      <div className='flex-colum'>
        <div className='w-full bg-slate-100 backdrop-blur-3xl rounded-md px-6 py-5'>
          <h1 className='text-blue-950 text-5xl font-bold pb-3 '>Login</h1>
          <p className='text-slate-600 pb-3'>Insira suas credênciais para entrar na pataforma.</p>
          <div className='my-5'>
            
            <CssTextField label="E-mail" id="custom-css-outlined-input" className='w-full'/>
          </div>
          <div >
            <CssTextField label="Senha" type='password' id="custom-css-outlined-input" className='w-full'/>
          </div>
          <div className='pt-2'>
            <button><p className='text-blue-950 pb-2 text-center self-center'>Esqueceu a senha?</p></button>
          </div>
          <div className='py-3'>
            <Button/>
          </div>
          <div className='justify-center items-center flex'>
            <button><p className='text-blue-950 pb-2 text-center self-center'>Não tenho uma conta</p></button>
          </div>
          

        </div>
       
      </div>
    </div> 
  )
}

export default Login
