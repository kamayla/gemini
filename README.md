# gemini

Google Gemini API を Vertex AI 経由で呼び出すサンプルです。
認証にはアプリケーションのデフォルト認証情報 (ADC) を使用します。

## アプリケーションのデフォルト認証情報 (ADC) とは

ADC は、Google Cloud のクライアントライブラリが自動的に認証情報を検出する仕組みです。
API キーを直接コードに埋め込む代わりに、ローカル環境に保存された認証情報を使って Google Cloud API を呼び出せます。

`gcloud auth application-default login` を実行すると、ブラウザで Google アカウント認証が行われ、認証情報が `~/.config/gcloud/application_default_credentials.json` に保存されます。
以降、クライアントライブラリはこのファイルを自動で読み取るため、コード上で認証情報を扱う必要がありません。

### ADC のメリット: ローカルと本番でコードの差分がない

ADC は実行環境に応じて認証情報の取得元を自動で切り替えます。

- **ローカル開発** — `gcloud auth application-default login` で保存された個人の認証情報を使用
- **本番環境 (Cloud Run など)** — 実行環境に紐づくサービスアカウントの認証情報を自動的に使用

そのため、認証に関するコードの変更や環境分岐は一切不要で、全く同じコードをローカルでも本番でもそのまま動かすことができます。

## 前提条件

- [Node.js](https://nodejs.org/) がインストールされていること
- [Google Cloud CLI (`gcloud`)](https://cloud.google.com/sdk/docs/install) がインストールされていること
- Google Cloud プロジェクト (`oned-japan`) へのアクセス権があること

## セットアップと実行

```bash
# 1. 依存パッケージをインストール
npm install

# 2. ADC でログイン（ブラウザが開きます）
make login

# 3. サンプルを実行
node gemini-sample.js
```
