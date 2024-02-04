"use client"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { signinformSchema} from "@/lib/validation"
import Loader from "@/components/shared/Loader"
import { Link } from "react-router-dom"

const SigninForm = ()=>{
    const isLoading = true;
    const form = useForm<z.infer<typeof signinformSchema>>({
        resolver: zodResolver(signinformSchema),
        defaultValues: {
          username: "",
          password: "",
        },
      })
     
      // 2. Define a submit handler.
      function onSubmit(values: z.infer<typeof signinformSchema>) {
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
                Don't have an account?
                <Link to='/sign-up' className="text-small-semibold text-primary-500 ml-2">Sign Up</Link>
              </p>
              
            </form>
          </div>
        </Form>
      )
}

export default SigninForm;