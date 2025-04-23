import { useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { Eye, EyeOff } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Link } from 'react-router-dom'

const SignupSchema = Yup.object().shape({
  firstName: Yup.string().required('First name is required'),
  lastName: Yup.string().required('Last name is required'),
  email: Yup.string().email('Invalid email address').required('Email is required'),
  password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password')], 'Passwords do not match')
    .required('Confirm password is required'),
})

export default function SignupPage() {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
      }}
      validationSchema={SignupSchema}
      onSubmit={(values) => {
        console.log(values)
      }}
    >
      {({ handleSubmit }) => (
        <Form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <Field name="firstName">
              {({ field }: any) => (
                <Input placeholder="Enter your first name" {...field} />
              )}
            </Field>
            <ErrorMessage name="firstName" component="div" className="text-sm text-red-500" />
          </div>

          <div>
            <Field name="lastName">
              {({ field }: any) => (
                <Input placeholder="Enter your last name" {...field} />
              )}
            </Field>
            <ErrorMessage name="lastName" component="div" className="text-sm text-red-500" />
          </div>

          <div>
            <Field name="email">
              {({ field }: any) => (
                <Input type="email" placeholder="Enter your email" {...field} />
              )}
            </Field>
            <ErrorMessage name="email" component="div" className="text-sm text-red-500" />
          </div>

          <div>
            <Field name="password">
              {({ field }: any) => (
                <div className="relative">
                  <Input
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Enter your password"
                    {...field}
                    className="pr-10"
                  />
                  <button
                    type="button"
                    className="absolute top-1/2 right-3 -translate-y-1/2 text-gray-500"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              )}
            </Field>
            <ErrorMessage name="password" component="div" className="text-sm text-red-500" />
          </div>

          <div>
            <Field name="confirmPassword">
              {({ field }: any) => (
                <Input type="password" placeholder="Confirm your password" {...field} />
              )}
            </Field>
            <ErrorMessage name="confirmPassword" component="div" className="text-sm text-red-500" />
          </div>

          <Button type="submit" className="w-full h-12 bg-[#00C9C6] text-white hover:bg-teal-600">
            Sign Up
          </Button>

          <p className="text-center text-sm text-blue-600 mt-4">
            Already have an account?{' '}
            <Link to="/login" className="cursor-pointer hover:underline">
              Login
            </Link>
          </p>
        </Form>
      )}
    </Formik>
  )
}
