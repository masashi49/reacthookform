import { FC, useState, Dispatch, SetStateAction } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'

// type inputNames = {
//   [key: string]: Dispatch<SetStateAction<string | undefined>>
// }

type Inputs = {
  [key: string]: string // これにしないとerrorが出る
}

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

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)

  console.log(watch('mail'))
  console.log(watch('pass'))

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input defaultValue='test' {...register('mail')} />
      <input defaultValue='test' {...register('pass', { required: true })} />
      {/* errors will return when field validation fails  */}
      {errors.pass && <span>This field is required</span>}

      <input type='submit' />
    </form>
  )
}

export default Form
