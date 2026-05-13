# Shared helpers for Husky hooks (POSIX sh)

husky_dim() { printf '\033[2m%s\033[0m' "$*"; }
husky_bold() { printf '\033[1m%s\033[0m' "$*"; }
husky_cyan() { printf '\033[36m%s\033[0m' "$*"; }
husky_green() { printf '\033[32m%s\033[0m' "$*"; }
husky_red() { printf '\033[31m%s\033[0m' "$*"; }
husky_yellow() { printf '\033[33m%s\033[0m' "$*"; }

husky_rule() {
  husky_dim "────────────────────────────────────────────────────────────"
  printf '\n'
}

husky_banner() {
  printf '\n'
  husky_rule
  husky_cyan "  $1"
  printf '\n'
  husky_rule
  printf '\n'
}

# husky_step "Label" command args...
husky_step() {
  label=$1
  shift
  printf ' '
  husky_yellow "▸"
  printf ' %s\n' "$(husky_bold "$label")"
  printf ' '
  husky_dim "→"
  printf ' %s\n' "$*"
  printf '\n'
  if "$@"; then
    printf ' '
    husky_green "✓"
    printf ' %s\n\n' "$(husky_dim "$label — ok")"
  else
    code=$?
    printf '\n '
    husky_red "✗"
    printf ' %s\n\n' "$(husky_bold "$label failed (exit $code)")"
    exit "$code"
  fi
}

husky_footer_ok() {
  printf ' '
  husky_green "✓"
  printf ' %s\n\n' "$(husky_bold "$1 — all checks passed")"
}
