let samples = [
{
content:
`
## How to send a post request

~~~javascript
fetch('http://example.com', {
        headers: {
                'Content-Type': 'application/json'
        },
        body: {
                JSON.stringify({
                        name: 'Samson'
                })
        }
})
~~~
`
}
,
{
content:
`
## Python List tip

~~~python
# iteratively add elements to a list
my_list = [i for i in iterative]
~~~
`
}
,

{
content:
`
## CSS Aspect Ratio is finally here

~~~css
.myclass {
        aspect-ratio: 16:5;
}
~~~
`
}
]

module.exports = samples
