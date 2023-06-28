import { asClass, createContainer, InjectionMode } from 'awilix'
import TestService from './services/TestService'
import DependentService from './services/DependentService'

interface ICradle {
    testService: TestService,
    depService: DependentService
}

const container = createContainer<ICradle>({
    injectionMode: InjectionMode.CLASSIC
})

container.register({
    testService: asClass(TestService),
    depService: asClass(DependentService).classic() 
})

const dep = container.cradle.depService

console.log(dep.getData())
