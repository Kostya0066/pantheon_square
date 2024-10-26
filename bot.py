from telegram import Update
from telegram.ext import Application, CommandHandler, ContextTypes

#Вынеси токен в .env
BOT_TOKEN = "Токен удалил, нужен будет скину"

async def start(update: Update, context: ContextTypes.DEFAULT_TYPE) -> None:
    user = update.effective_user
    await update.message.reply_text(
        f"Привет, {user.first_name}! Добро пожаловать в PS Ecosystem. Нажмите на кнопку внизу, чтобы открыть Web App и начать использование."
    )

def main():
    application = Application.builder().token(BOT_TOKEN).build()
    application.add_handler(CommandHandler("start", start))
    application.run_polling()

if __name__ == '__main__':
    main()
