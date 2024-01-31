# apollo-server-devcontainer

Apollo Serverの開発環境のdevcontainer


## 利用方法

1. devcontainerを立ち上げる
リポジトリをクローンしたディレクトリでVS Codeを開いて `Reopen in Container` を実行する。

2. サーバーを立ち上げる
ターミナルを開き以下のコマンドでサーバーを起動する。

```
$ yarn dev
```

## devcontainerを既存のApollo Serverのプロジェクトで利用する場合
以下のファイルをコピーする

- [docker-compose.yml](docker-compose.yml)
- [.devcontainer/devcontainer.json](.devcontainer/devcontainer.json)
- [.devcontainer/docker-compose.yml](.devcontainer/docker-compose.yml)


## 技術スタック
- [node:16](https://hub.docker.com/_/node)
