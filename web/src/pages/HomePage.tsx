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
import LoaderSvg from '@/assets/Loader.svg'
import {Loader} from 'lucide-react'

export default function HomePage() {
  const {
    data,
    isFetching,
    form,
    isCreateLinkPending,
    isDeleteLinkPending,
    isExportLinkPending,
    handleSubmit,
    handleDeleteLink,
    handleCopyLink,
    handleExportLinks,
  } = useHome()


  return (
    <div className="h-screen flex flex-col mx-auto max-w-[980px] w-full gap-6 py-8 px-4 lg:items-start lg:px-0 lg:gap-8 lg:pt-[88px]">
      <header className="shrink-0">
        <img className="w-24" src={Logo} alt="logo" />
      </header>

      <section className="w-full flex flex-col lg:flex-row gap-3 lg:gap-4 overflow-hidden">
        <Card className="w-full lg:max-w-[380px] shrink-0 h-[328px]">
          <Headline text="Novo Link" />
          <Form {...form}>
            <form onSubmit={form.handleSubmit(handleSubmit)} className="w-full space-y-5">
              <div className="flex flex-col gap-4 w-full">
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

              <Button disabled={isFetching || isCreateLinkPending || isDeleteLinkPending}>
                Salvar Link
              </Button>
            </form>
          </Form>
        </Card>

        <Card className="w-full lg:flex-1 min-h-0 flex flex-col">
          <CardHeader headlineText="Meus links">
            <Button
              variant={'secondary'}
              size={'sm'}
              disabled={isFetching || isCreateLinkPending || isDeleteLinkPending || isExportLinkPending}
              onClick={handleExportLinks}
            >
              <img data-loading={isExportLinkPending} className="size-4 data-[loading=true]:animate-spin" src={isExportLinkPending ? LoaderSvg : DownloadIcon} alt="download" />
              Baixar CSV
            </Button>
          </CardHeader>

          {data?.length === 0 || !data && (
            <div className="pt-4 flex flex-col gap-3 items-center">
              {isFetching ? (
                <Loader className="animate-spin size-6 text-gray-400" />
              ) : (
                <img className="size-8" src={LinkIcon} alt="link" />
              )}
              <Label>{isFetching ? "CARREGANDO LINKS" : "AINDA NÃO EXISTEM LINKS CADASTRADOS"}</Label>
            </div>
          )}

          <div className="flex-1 overflow-y-auto min-h-0 w-full flex flex-col gap-3 pr-2 pb-2">
            {!isFetching &&
              data?.map((link: linkType) => (
                <LinkItem
                  key={link.id}
                  id={link.id}
                  accesses={link.accesses}
                  slug={link.slug}
                  url={link.url}
                  onDeleteLink={handleDeleteLink}
                  onCopyLink={handleCopyLink}
                />
              ))}
          </div>
        </Card>
      </section>
    </div>
  )
}
