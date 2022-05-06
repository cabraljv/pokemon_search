# Poke API challenge

# Como rodar

```sh
$ docker-compose up
```

# Possíveis soluções de alta disponibilidade

## 1 - Cloudfront + Api Gateway + Lambda

Essa é a melhor solução possível e consiste em mudar esse código para uma lambda function que posteriormente pode ser configurada como endpoint no api gateway e cacheada no cloudfront. Com isso abre a possibilidade de configurar um cache mais intenso. Deixando a lambda em cold start ela fica bem rápida na primeira chamada com aquele endpoint e praticamente instantânea em requests repetidas. Criando também a possibilidade de se configurar zonas de distribuição diferentes, diminuindo ainda mais a latência

## 2 - K8S - AKS

Solução mais cara e trabalhosa, porém ainda sim muito confiável. É possivel subir um cluster no aks com a aplicação e configurar um escalonamento + nodes de backup para garantir a disponibilidade do serviço