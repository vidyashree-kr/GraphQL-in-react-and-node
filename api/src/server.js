const {ApolloServer}=require('apollo-server')
const typeDefs=require('./schema')
const resolvers=require('./resolver')
const{models,db}=require('./db')

const server=new ApolloServer({
    typeDefs,resolvers,context({req}){
        // //implementing authorization and authentication
        // const isAuth=req.headers.authorization
        // throw new Error("Not auth")
        const user=db.get('user').value()
        if(!user) throw Error('Not auth')
        return {models,db,user}
    }
})
server.listen().then(({url})=>{
    console.log(`server started at ${url}`)
})