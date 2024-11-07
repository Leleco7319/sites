import Showcase2 from "./Showcase2"

export default {
    component: Showcase2,
    title: 'Components/Showcase2',
    decorators: [(story) => <div style={{ width:'100%' }}>{story()}</div>],


}

export const Default = () => <Showcase2 title={'Lançamentos'}/>