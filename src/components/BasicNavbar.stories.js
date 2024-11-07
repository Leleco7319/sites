import BasicNavbar from './BasicNavbar'

export default {
    title: 'Components/BasicNavbar',
    component: BasicNavbar,
    decorators: [(story) => <div style={{ width:'100%'}}>{story()}</div>],
}

export const Default = {}