
import Logo from '@/assets/logo.svg'
import Card from '@/components/Card'
import Headline from '@/components/Headline'
import Input from '@/components/Input'

export default function HomePage(){
    return(
       <div className="mx-auto max-w-[980px] w-full flex flex-col items-center gap-6 pt-8 px-4 lg:items-start lg:px-0 lg:gap-8 lg:pt-[88px]">
        <header>
            <img className='w-24' src={Logo} />
        </header>
        <section className='w-full flex gap-3 flex-wrap lg:gap-4'>
                <Card className='max-w-[380px] w-full'>
                    <Headline text='Novo Link' />
                    <div className='flex flex-col gap-4 w-full'>
                        <Input labelText='link original' placeholder='www.exemplo.com.br' />
                        <Input labelText='link encurtado' placeholder='brev.ly/' />
                    </div>
                </Card>
                <Card className='flex-1'>
                    <Headline text='Meus Links' />
                </Card>
            </section>

       </div> 
    )
}