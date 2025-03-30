// src/features/auth/LoginForm.tsx
import { useForm } from 'react-hook-form';

import { Button } from '../../components/ui/Button';
import { colors } from '../../constants/theme';
import { useAuthStore } from '../../stores/authStore';

type FormData = {
  email: string
  password: string
}

export const LoginForm = () => {
  const { register, handleSubmit } = useForm<FormData>()
  const login = useAuthStore((state) => state.login)

  const onSubmit = handleSubmit(async (data: FormData) => {
    await login(data.email, data.password)
  })

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div>
        <label 
          className="block text-sm font-medium mb-1" 
          style={{ color: colors.text }}
        >
          Email
        </label>
        <input
          type="email"
          {...register('email', { required: true })}
          className="w-full p-3 rounded-xl border"
          style={{ 
            backgroundColor: colors.card,
            borderColor: colors.separator 
          }}
        />
      </div>
      
      <div>
        <label 
          className="block text-sm font-medium mb-1" 
          style={{ color: colors.text }}
        >
          Password
        </label>
        <input
          type="password"
          {...register('password', { required: true })}
          className="w-full p-3 rounded-xl border"
          style={{ 
            backgroundColor: colors.card,
            borderColor: colors.separator 
          }}
        />
      </div>
      
      <Button fullWidth type="submit">
        Sign In
      </Button>
    </form>
  )
}