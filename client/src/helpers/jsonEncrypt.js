const NodeRSA = require('node-rsa');

const public_key = `ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABgQDAHfmsN/amqxeROOsHZLAg+pDWEclY6i0yxV24oBLOwjasudXT/7qJEtC5QNlrV7orza/aYXpEuID/reOYpzpMWdgqecApZUChhFgcF1mz+aMKLuTP4duGh/VWGjGkeHPoXsd3+Sh17y581YLaXFmfge/m/VpWmJtgRnyjnm+aFii8uODkjjNpRUD7v1xxy5n668EGjvdQayIc8mn/AN3SwI4k/jJkgczR65M8oOk45RsD+TAtQANMgwoOpS1emT5+alb9rI7mVXetlfFt8NocJSbq+ocS4ZmTOhnIDHTqutem4MdXli8VV9KjuG2pkjwGVMRdxAJnxMPppBnXZROq+CLfVpu9KzuCijUPXgb4Jmpe+Ax/sfIryhIOBWoc+BOPI5IvHaOf8GfiIGrlTxHR6aQVpTnQy4J9qm3N1wJ/Q14UbL1NuWSvRKWpJpCcoTGwB/HD91pwXzGfIeE+sLZG1Fqymgr0XrXkFffNt9lcvaCHEhBJRR0S/l5FbFwEqfU= sudonim@debian`
const key = new NodeRSA();
key.importKey(public_key,'openssh-public');

const encrypt_ = (data) => {
    return key.encrypt(JSON.stringify(data),'base64');
}

export default encrypt_;