import Item from "./Item"


export default {
    component: Item,
    title: 'Components/Item',
    decorators: [(story) => <div style={{ padding: '3rem', display:'flex', justifyContent:'center' }}>{story()}</div>],
}

export const Default = () => <Item title={"Envio Grátis"} caption={"Para compras acima de R$5.000"} image={'truck'}/>