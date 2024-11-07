import Showcase from "./Showcase"

export default {
    component: Showcase,
    title: 'Components/Showcase'
}

const pictures = [
    {text:'piso 1', image:'piso1.jpg'},
    {text:'piso 2', image:'piso2.jpg'},
    {text:'piso 3', image:'piso3.jpg'},
    {text:'piso 4', image:'piso4.jpg'},
    {text:'piso 5', image:'piso5.jpg'},
    {text:'piso 6', image:'piso6.jpg'},
  ]

export const Default = () => <Showcase title={'Nossas linhas'} pictures={pictures}/>