import { FC } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import type { Inputs } from '../types'

// type inputNames = {
//   [key: string]: Dispatch<SetStateAction<string | undefined>>
// }

const Form: FC = () => {
  // const [mail, setMail] = useState<string | undefined>()
  // const [pass, setPass] = useState<string | undefined>()

  // const inputNames: inputNames = {
  //   mail: setMail,
  //   pass: setPass
  // }

  // const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   inputNames[e.target.name](e.target.value)
  // }
  // const handleSubmit = () => {
  //   console.log(mail, pass)
  // }
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm()

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data, errors)

  console.log(watch('mail'))
  console.log(watch('pass'))

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor=''>
        <input defaultValue='' {...register('mail', { required: true })} />
      </label>
      {errors.mail && <span>This field is mail</span>}
      <label htmlFor=''>
        <input defaultValue='' {...register('pass', { required: true })} />
      </label>
      {errors.pass && <span>This field is pass</span>}
      <label htmlFor=''>
        <select {...(register('age'), { required: true })}>
          <option value='10~20代'>10~20代</option>
          <option value='30~40代'>30~40代</option>
          <option value='50~'>50~</option>
        </select>
      </label>
      {errors.age && <span>This field is required</span>}

      <input type='submit' />
    </form>
  )
}

export default Form
