const modelManger = (resolve) => {
  import('@/components/model/modelManger').then((module) => {
    resolve(module)
  })
}
const modelIntro = (resolve) => {
  import('@/components/model/modelIntro').then((module) => {
    resolve(module)
  })
}
const addModel = (resolve) => {
  import('@/components/model/addModel').then((module) => {
    resolve(module)
  })
}

const model = [{
  path: 'home/modelManger',
  component: modelManger,
  name: 'modelManger',
  meta: { title: '模块管理' }
}, {
  path: 'home/modelManger/addModel',
  component: addModel,
  name: 'addModel',
  meta: { title: '模块管理-添加模板' }
}, {
  path: 'home/modelIntro',
  component: modelIntro,
  name: 'modelIntro',
  meta: { title: '接口调用说明' }
}]

export default model
