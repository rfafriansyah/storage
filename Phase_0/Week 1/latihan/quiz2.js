function checkAccount(username, password){

if(username != NaN || password != Nan){

  return 'input bukan angka'

} else if(username === 'Kosasih' && password === 'k0sasih'){


  return 'Input berhasil'

} else{

  return 'coba lagi'

}

}

console.log(checkAccount('Kosasih','k0sasih'))

checkAccount('Kosasih',20)

checkAccount('Kosasih','123')