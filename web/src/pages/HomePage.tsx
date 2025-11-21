
import Logo from '@/assets/logo.svg'
import Card from '@/components/Card'
import CardHeader from '@/components/CardHeader'
import Headline from '@/components/Headline'
import Input from '@/components/Input'
import { Button } from '@/components/ui/button'
import DownloadIcon from '@/assets/DownloadSimple.svg'
import { Label } from '@/components/ui/label'
import LinkIcon from '@/assets/Link.svg'
import LinkItem from '@/components/LinkItem'
import useHome from '@/hooks/useHome'
import type { linkType } from '@/types/link.type'
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from "@/components/ui/form"
  import { Loader } from "lucide-react"

export default function HomePage(){

    const { data, isFetching, form, isCreateLinkPending, isDeleteLinkPending, handleSubmit, handleDeleteLink, handleCopyLink } = useHome()


    return(
       <div className="mx-auto max-w-[980px] w-full flex flex-col items-center gap-6 pt-8 px-4 lg:items-start lg:px-0 lg:gap-8 lg:pt-[88px]">
        <header>
            <img className='w-24' src={Logo} />
        </header>
        <section className='w-full flex gap-3 flex-wrap items-start lg:gap-4'>
                <Card className='lg:max-w-[380px] w-full'>
                    <Headline text='Novo Link' />
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(handleSubmit)} className='w-full space-y-5'>
                            <div className='flex flex-col gap-4 w-full'>
                                <FormField
                                    control={form.control}
                                    name="url"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Link Original</FormLabel>
                                            <FormControl>
                                                <Input placeholder="https://.exemplo.com.br" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="slug"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Link Encurtado</FormLabel>
                                            <FormControl>
                                                <Input prefixInput placeholder="" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>
                            <Button disabled={isFetching || isCreateLinkPending || isDeleteLinkPending}>Salvar Link</Button>
                        </form>
                    </Form>
                </Card>
                <Card className='w-full lg:flex-1'>
                    <CardHeader headlineText='Meus links' >
                        <Button variant={'secondary'} size={'sm'} disabled={isFetching || isCreateLinkPending || isDeleteLinkPending}><img className='size-4' src={DownloadIcon} />Baixar CSV</Button>
                    </CardHeader>
                    {  
                        data?.length === 0 &&
                            <div className='pt-4 flex flex-col gap-3 items-center'>
                                {isFetching ? <Loader className='animate-spin size-6 text-gray-400' /> : <img className='size-8' src={LinkIcon} />}
                                <Label>{isFetching ? "CARREGANDO LINKS" : "AINDA NÃO EXISTEM LINKS CADASTRADOS"}</Label>
                            </div>
                    }
                    <div className='w-full flex flex-col gap-3'>
                        {
                            !isFetching && data?.map((link: linkType) => (
                                <LinkItem key={link.id} id={link.id} accesses={link.accesses} slug={link.slug} url={link.url} onDeleteLink={handleDeleteLink} onCopyLink={handleCopyLink} />
                            ))
                        }
                    </div>
                </Card>
            </section>

       </div> 
    )
}