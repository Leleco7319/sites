import Image from "./Image"


export default {
    component: Image,
    title: 'Components/Image',
    decorators: [(story) => <div style={{ padding: '3rem', display:'flex', justifyContent:'center', scale: '0.9' }}>{story()}</div>],
}

export const Default = () => <Image text={'piso 1'} image={'piso1.jpg'}/>