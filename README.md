1. Dev branch  for development
2. Staging branch for finalised 
3. Prod branch for end user

Branch from prod branch that is feature branch 

Dev 

git add .
git commit -m "93add message for your chnages"
git push alias branch-name  

git remote -v
git remote add alias https-link

git checkout -b branch-name  -> create new branch 
git checkout branch-name   -> switch to branch 

git  merge "branch-name"

git reset --soft HEAD~1
git push allies <brand-name>


for squashed commit branch
// this command will check last commits
git log --oneline --decoarte 
//to revert last commits to
git reset  --soft HEAD~<commit-number>

git push origin <branch-name> -f