
import React from 'react'
import { Control, Form } from 'react-hook-form'
import { FormField, FormLabel, FormControl, FormMessage } from './ui/form'
import { Input } from './ui/input'
import { z } from 'zod'
import { authFormSchema } from '@/lib/utils'

interface CustomInput {
    control:Control<z.infer<typeof authFormSchema>>,
    name:string,
    label:string,
    placeholder:string

}

const CustomInput = ({control,name,label,placeholder}:CustomInput) => {
  return (
   <FormField
          control={control}
          name={name}
          render={({ field }) => (
           <div className='form-item'>
            <FormLabel className='form-label'>Email</FormLabel>
            <div className="w-full flex-col"></div>
            <FormControl>
                <Input
                placeholder={placeholder}
                className='input-class'
                {...field}
                ></Input>
            </FormControl>
            <FormMessage className='form-message'/>
           </div>
          )}
        />
  )
}

export default CustomInput
