const Certification = (resolve) => {
  import('@/components/certification/certification').then((module) => {
    resolve(module)
  })
}
const CertificationChange = (resolve) => {
  import('@/components/certification/certificationChange').then((module) => {
    resolve(module)
  })
}

const certification = [{
  path: 'home/certification',
  component: Certification,
  name: 'certification',
  meta: { title: '认证' }
},
{
  path: 'home/certificationChange',
  component: CertificationChange,
  name: 'certificationChange',
  meta: { title: '修改认证' }
}]

export default certification
