function toggleCard(event, card) {
    // Prevent toggling if a link is clicked
    if (event.target.tagName === 'A') return;

    card.classList.toggle('collapsed');
    const summary = card.querySelector('.summary');
    const modelViewer = card.querySelector('.model-viewer-container');
    const buttonGroup = card.querySelector('.button-group');

    if (card.classList.contains('collapsed')) {
        summary.classList.add('hidden');
        modelViewer.classList.add('hidden');
        buttonGroup.classList.add('hidden');
    } else {
        summary.classList.remove('hidden');
        modelViewer.classList.remove('hidden');
        buttonGroup.classList.remove('hidden');
    }
}