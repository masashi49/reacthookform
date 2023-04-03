import React from 'react'
import { Path, useForm, UseFormRegister, SubmitHandler } from 'react-hook-form'

type IFormValues = {
  'First Name': string
  Age: number
}

type InputProps = {
  register: UseFormRegister<IFormValues>
  required: boolean
  label: Path<IFormValues>
}

const Input = ({ label, register, required }: InputProps) => (
  <>
    <label>{label}</label>
    <input {...register(label, { required })} />
  </>
)

const Select = React.forwardRef<
  HTMLSelectElement,
  { label: string } & ReturnType<UseFormRegister<IFormValues>>
>(({ onChange, onBlur, name, label }, ref) => (
  <>
    <label>{label}</label>
    <select name={name} ref={ref} onChange={onChange} onBlur={onBlur}>
      <option value='20'>20</option>
      <option value='30'>30</option>
    </select>
  </>
))

function Form2() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<IFormValues>()

  const onSubmit: SubmitHandler<IFormValues> = (data) => {
    alert(JSON.stringify(data))
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input label='First Name' register={register} required />
      {errors['First Name'] && 'First Nameいれて'}
      <Select label='Age' {...register('Age')} />
      <input type='submit' />
    </form>
  )
}

export default Form2
