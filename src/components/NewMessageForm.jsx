const NewMessageForm = () => {
    return (
        <div>
            <input type="text" data-testid="messageText"/>
            <button type='button' data-testid='sendButton'>Send</button>
        </div>
    )
}

export default NewMessageForm;