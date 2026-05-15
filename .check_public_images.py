from pathlib import Path
root = Path('.')
public_dir = root / 'public'
public_images = sorted([p.name for p in public_dir.iterdir() if p.suffix.lower() in {'.png', '.jpg', '.jpeg', '.svg'}])
search_paths = [p for p in root.rglob('*') if p.suffix.lower() in {'.js', '.jsx', '.ts', '.tsx', '.html', '.css', '.md'}]
refs = {img: 0 for img in public_images}
for path in search_paths:
    try:
        text = path.read_text(encoding='utf-8')
    except Exception:
        continue
    for img in public_images:
        if img in text:
            refs[img] += 1
print('PUBLIC_IMAGES_TOTAL', len(public_images))
for img in public_images:
    print(f'{img}:{refs[img]}')
