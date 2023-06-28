import TestService from './TestService'

class DependentService {
    constructor(
        private readonly testService: TestService
    ) {}

    public getData(): string {
        return this.testService.getData()
    }
}

export default DependentService