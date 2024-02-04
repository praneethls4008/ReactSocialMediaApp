"use client"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { signupformSchema} from "@/lib/validation"
import Loader from "@/components/shared/Loader"
import { Link } from "react-router-dom"

const SignUpForm = ()=>{
    const isLoading = true;
    const form = useForm<z.infer<typeof signupformSchema>>({
        resolver: zodResolver(signupformSchema),
        defaultValues: {
          name: "",
          username: "",
          email: "",
          password: "",
        },
      })
     
      // 2. Define a submit handler.
      function onSubmit(values: z.infer<typeof signupformSchema>) {
        console.log(values)
      }

    return (
        <Form {...form}>
          <div className="flex-center flex-col">
            <img src="/assets/images/logo.svg"/>
            <p>Create your snapgram account</p>
            <form onSubmit={form.handleSubmit(onSubmit)} className="pt-1 space-y-8">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input type="text"  className="shad-input" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Username</FormLabel>
                    <FormControl>
                      <Input type="text"  className="shad-input" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input type="email" className="shad-input" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input type="password" className="shad-input" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />

              <Button type="submit" className="shad-button_primary w-full">
                {
                  isLoading ? 
                    <div className="flex-center gap-2">
                      <Loader/> Loading...
                    </div> 
                  :'submit'
                }
              </Button>
              <p className="text-small-regular text-light-2 text-center mt-2">
                Already have an account?
                <Link to='/sign-in' className="text-small-semibold text-primary-500 ml-2">Sign In</Link>
              </p>
            </form>
          </div>
        </Form>
      )
}

export default SignUpForm;