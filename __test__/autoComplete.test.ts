import { autoComplete } from '../src/lib'
import { key } from '../src/lib/key'
import { Status } from '../src/types/Status'

describe('api key test', () => {
    test('is key existing', () => {
        expect(key).toBeDefined()
    })
})

describe('auto complete test', () => {
    test('is response data existing', async (done) => {
        const result = await autoComplete({
            input: '1600 Amphitheatre',
            key,
        })
        expect(result.status).toBe(Status.OK)
        expect(
            typeof result.predictions === 'object' &&
                typeof result.predictions.length === 'number'
        ).toBeTruthy()
        done()
    })
})
